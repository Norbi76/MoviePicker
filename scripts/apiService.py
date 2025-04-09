import requests
import os
import json
from dotenv import load_dotenv

JSON_FILE = "C:/Users/Norbert/Desktop/nrbi/faculta/an4/sem2/se/MoviePicker/scripts/movies.json"

load_dotenv()  # Load environment variables from .env file

def get_movies_by_filters(year_gte, year_lte, vote_count, page):
    """
    Retrieves a list of movies from The Movie Database API based on specific filters.
    Filters include release date range, minimum vote count, and pagination.
    This function constructs the API request URL dynamically and fetches the data.

    Args:
        year_gte (str): Start of the release date range (e.g., "2020-01-01").
        year_lte (str): End of the release date range (e.g., "2020-12-31").
        vote_count (int): Minimum number of votes a movie must have.
        page (int): Page number for paginated results.

    Returns:
        dict: A dictionary containing the API response with movie data, or None if an error occurs.
    """
    api_key = os.environ.get('REACT_APP_TMDB_API_KEY')  # Retrieve API key from environment variable
    if not api_key:
        print("Error: API_KEY environment variable not set.")
        return None

    url = f"https://api.themoviedb.org/3/discover/movie?api_key={api_key}&include_adult=false&include_video=false&language=en-US&page={page}&primary_release_date.gte={year_gte}&primary_release_date.lte={year_lte}&sort_by=primary_release_date.asc&vote_count.gte={vote_count}"
    # print(f"Requesting URL: {url}")  # Debugging line to check the URL being requested
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error during API request: {e}")
        return None

def get_movies_details(movie_id:int):
    """
    Fetches detailed information about a specific movie using its ID.
    This includes metadata such as title, release date, overview, and more.

    Args:
        movie_id (int): The unique ID of the movie to fetch details for.

    Returns:
        dict: A dictionary containing detailed movie information, or None if an error occurs.
    """
    api_key = os.environ.get('REACT_APP_TMDB_API_KEY')  # Retrieve API key from environment variable
    if not api_key:
        print("Error: API_KEY environment variable not set.")
        return None

    url = f"https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error during API request: {e}")
        return None

def save_movies_to_json(movies:dict, json_file_path:str=JSON_FILE) -> None:
    """
    Saves movie data to a JSON file for persistent storage.
    The data is formatted with indentation for readability.

    Args:
        movies (dict): A dictionary containing movie data to be saved.
        json_file_path (str): The file path where the JSON data will be saved (default is JSON_FILE).

    Returns:
        None
    """
    if movies:
        try:
            with open(json_file_path, 'w') as f:
                json.dump(movies, f, indent=4)  # indent for pretty printing
            print(f"\nMovie data saved to {json_file_path}")
        except IOError as e:
            print(f"Error saving to file: {e}")
    else:
        print("No movie data to save.")

def get_movie_ids(year_min: int, year_max: int, vote_count_gte: int = 500) -> list:
    """
    Retrieves a list of movie IDs based on a range of years and a minimum vote count.
    This function iterates through each year in the specified range and fetches movie IDs 
    from all available pages for that year. It uses the `get_movies_by_filters` function 
    to retrieve movies based on the year range, vote count, and pagination.

    Steps:
    1. Initialize an empty list `movie_ids` to store the IDs of movies.
    2. Loop through each year in the range from `year_min` to `year_max` (inclusive).
    3. For each year:
       - Construct the start (`year_gte`) and end (`year_lte`) dates for the year.
       - Fetch the first page of movies for the year using `get_movies_by_filters`.
       - Determine the total number of pages available (capped at 500 due to API limits).
       - Loop through each page and fetch movies for that page.
       - Extract the movie IDs from the results and append them to `movie_ids`.
    4. Return the complete list of movie IDs.

    Args:
        year_min (int): The starting year of the range (inclusive).
        year_max (int): The ending year of the range (inclusive).
        vote_count_gte (int): Minimum number of votes a movie must have (default is 500).

    Returns:
        list: A list of movie IDs that match the specified criteria.
    """
    movie_ids = []  # Initialize an empty list to store movie IDs.

    # Loop through each year in the specified range.
    for year in range(year_min, year_max + 1):
        # Construct the start and end dates for the current year.
        year_gte = f"{year}-01-01"
        year_lte = f"{year}-12-31"
        print(f"Retrieving from year range {year_gte} {year_lte}...")

        # Fetch the first page of movies for the current year.
        movies = get_movies_by_filters(year_gte, year_lte, vote_count_gte, 1)
        if movies["total_pages"] > 500:
            max_page = 500  # Cap the total pages at 500 due to API limitations.
        else:
            max_page = movies["total_pages"]
        print(f"Total pages: {max_page}")

        # Loop through each page to fetch movies.
        for page in range(1, max_page + 1):
            print(f"    Retrieving from page {page}...")

            # Fetch movies for the current page.
            movies = get_movies_by_filters(year_gte, year_lte, vote_count_gte, page)
            if movies:
                # Extract movie IDs from the results and append them to the list.
                for movie in movies["results"]:
                    movie_ids.append(movie["id"])
        
    return movie_ids  # Return the complete list of movie IDs.

def get_movie_details(movie_ids: list) -> dict:
    """
    Fetches detailed information for a list of movie IDs.
    This function iterates through the provided list of movie IDs and retrieves detailed 
    information for each movie using the `get_movies_details` function. The results are 
    stored in a dictionary where the key is a counter and the value is the movie details.

    Steps:
    1. Initialize a counter `item_counter` to track the number of processed movies.
    2. Create an empty dictionary `all_movies` to store the movie details.
    3. Loop through each movie ID in the `movie_ids` list:
       - Calculate the number of remaining IDs to process and display progress.
       - Fetch the movie details using the `get_movies_details` function.
       - If the details are successfully retrieved, add them to the `all_movies` dictionary.
       - Increment the `item_counter`.
    4. Return the dictionary containing all movie details.

    Args:
        movie_ids (list): A list of movie IDs to fetch details for.

    Returns:
        dict: A dictionary containing detailed information for all movies.
    """
    item_counter = 0  # Initialize a counter to track processed movies.
    all_movies = {}  # Create an empty dictionary to store movie details.

    # Loop through each movie ID in the list.
    for id in movie_ids:
        # Calculate the number of remaining IDs to process.
        remaining_ids = len(movie_ids) - item_counter
        print(f"\rProcessing ID {item_counter + 1}/{len(movie_ids)} - Remaining: {remaining_ids}", end="")

        # Fetch the movie details using the `get_movies_details` function.
        movie_details = get_movies_details(id)
        if movie_details:
            # Add the movie details to the dictionary with the counter as the key.
            all_movies.update({item_counter: movie_details})
            item_counter += 1  # Increment the counter.

    return all_movies  # Return the dictionary containing all movie details.


if __name__ == '__main__':
    """
    Main execution block to fetch movie data and save it to a JSON file.
    Retrieves movie IDs for a specified year range and vote count, fetches their details,
    and saves the data to a JSON file.
    """
    movie_ids = get_movie_ids(1975, 2025, 500) 
    all_movies = get_movie_details(movie_ids)

    if all_movies:
        save_movies_to_json(all_movies)  
    else:
        print("Failed to retrieve movies.")
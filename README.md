# Weather App & Web Server

A Node.js weather application that uses real-time data from Weatherstack and Geocoding from Mapbox.

## 🚀 Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

## 🛠️ Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ImethDewmina128At90/Weather_app.git
    cd Weather_app
    ```

2.  **Install Dependencies**:
    Navigate to the `webserver` directory and install the required packages:
    ```bash
    cd webserver
    npm install
    ```
    (Do the same for `WeatherApp` folder if you want to run the cli version).

## 🔑 API Configuration

This project requires API keys from **Weatherstack** and **Mapbox** to function. Follow these steps to get your keys and configure the app.

### 1. Weatherstack API (for Weather Data)

1.  Go to [weatherstack.com](https://weatherstack.com/).
2.  Click **Sign Up** and choose the **Free** plan.
3.  Once signed up, you will see your **API Access Key** on your dashboard.
4.  Copy this key.

### 2. Mapbox API (for Geocoding)

1.  Go to [mapbox.com](https://www.mapbox.com/).
2.  Click **Sign Up** to create an account.
3.  Go to your **Account Dashboard**.
4.  Locate your **Default Public Token** (it starts with `pk.eyJ...`).
5.  Copy this token.

### 3. Configure the Code

You need to paste these keys into the code where placeholders are currently set.

**File 1: `webserver/src/geocode.js`**
- Open this file.
- Find `access_token=YOUR_MAPBOX_TOKEN`.
- Replace `YOUR_MAPBOX_TOKEN` with your **Mapbox** token.

**File 2: `webserver/src/forecast.js`**
- Open this file.
- Find `access_key=YOUR_WEATHERSTACK_KEY`.
- Replace `YOUR_WEATHERSTACK_KEY` with your **Weatherstack** key.

**File 3: `WeatherApp/https.js` (Optional CLI version)**
- Open this file.
- Replace `YOUR_ACCESS_KEY` with your **Weatherstack** key.

**File 4: `WeatherApp/geocode.js` & `WeatherApp/forecast.js` (Optional CLI version)**
- Update the tokens similarly if you plan to use the command-line version in `WeatherApp`.

## ▶️ Running the App

1.  Navigate to the `webserver` directory:
    ```bash
    cd webserver
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

3.  Open your browser and visit:
    [http://localhost:3000](http://localhost:3000)

4.  Enter a location (e.g., "Colombo") and search!

## ⚠️ Important Note

**Never commit your actual API keys to GitHub.**
If you edit the files with your real keys to run locally, make sure **NOT** to commit those changes, or use environment variables (`.env`) for better security.

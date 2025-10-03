# SentiStock

**AI-Powered Stock Forecasting & Sentiment Analysis Platform**

SentiStock is a full-stack application that predicts stock price movements by combining **social media sentiment analysis** with **historical market data**. The platform integrates **deep learning models** for time-series forecasting and **NLP-based sentiment scoring** to analyze how public emotion influences market behavior.

---

## Overview

SentiStock bridges finance and AI through two complementary models:

* **Stock Prediction Model:** Uses historical price data and technical indicators to forecast short-term market trends.
* **NLP Sentiment Model:** Analyzes news articles, tweets, and Reddit posts to quantify public sentiment and correlate it with market movements.

Together, these models provide a richer, data-driven view of how collective sentiment shapes financial outcomes.

---

## Architecture

**Frontend:**

* Built with **Next.js** and **Tailwind CSS** for a responsive, intuitive user experience.
* Displays real-time sentiment scores, stock forecasts, and trend visualizations.
* Allows users to search for tickers and view historical and predicted data interactively.

**Backend:**

* Powered by **FastAPI** for scalable RESTful endpoints connecting the frontend to ML models.
* Manages data ingestion, preprocessing, and model inference pipelines.
* Integrates APIs such as **yFinance**, **FRED**, and **NewsAPI** for dynamic data sourcing.

**Machine Learning Models:**

* **Stock Forecasting:**

  * LSTM-based time-series models trained on daily closing prices and engineered indicators (RSI, MACD, EMA).
  * Incorporates feature scaling, sliding windows, and rolling predictions.
* **Sentiment Analysis:**

  * Uses transformer-based models (FinBERT or RoBERTa) and lexicon-based methods (VADER) for sentiment scoring.
  * Aggregates scores across social platforms to gauge market mood.

---

## Tech Stack

| Layer                   | Technologies                                     |
| ----------------------- | ------------------------------------------------ |
| **Frontend**            | Next.js, React, Tailwind CSS                     |
| **Backend**             | FastAPI, Python                                  |
| **Machine Learning**    | PyTorch, scikit-learn, NumPy, Pandas             |
| **Data Sources**        | yFinance, FRED API, NewsAPI, Reddit/Twitter data |

---

## Features

* Real-time sentiment and stock data visualization
* Interactive dashboard for exploring different tickers
* Dual-model prediction combining sentiment and price data
* Historical trend comparison and feature-based insights
* Modular design for future model extensions (e.g., multi-sector or ETF-level prediction)

---

## Team Structure

### **Project Managers**

* Anupriya Islam ([@anupriyai](https://github.com/anupriyai))
* Socfia Valadez ([@sofvaladez](https://github.com/sofvaladez))

### **Web Development Team**

* Finna Wang ([@9158pebble](https://github.com/9158pebble))
* Andrew Madrigal ([@andrew-madrigal](https://github.com/andrew-madrigal))
* Ryan Eun ([@ryanheun06](https://github.com/ryanheun06))

### **Stock Model Team**

* Finna Wang ([@9158pebble](https://github.com/9158pebble))
* Sarah Shi ([@sarah-yuan](https://github.com/sarah-yuan))
* Andrew Madrigal ([@andrew-madrigal](https://github.com/andrew-madrigal))
* Andy Ma ([@HaoningMaAAA](https://github.com/HaoningMaAAA))
* Raniya Khan ([@raniyakhan](https://github.com/raniyakhan))

### **NLP Model Team**

* Kailash Ramesh ([@kailashramesh](https://github.com/kailashramesh))
* Ryan Eun ([@ryanheun06](https://github.com/ryanheun06))
* Sofiia Surzhak ([@ssurzhak](mailto:ssurzhak@berkeley.edu))
* Zen Huang ([@zen0072](https://github.com/zen0072))
* Anika Karandikar ([@anika-karandi](https://github.com/anika-karandi))

---

export const dataScienceDomain = {
  domain: "Data Science",
  color: "#3D6E86",
  entries: [
    {
      term: "Topics to master (Data Science)",
      slug: "topics-to-master-data-science",
      meaning: "The core curriculum data scientists climb through from statistics to model deployment.",
      purpose: "Map the pillars of data science and machine learning engineering.",
      starter: {
        summary: "Statistics & Probability → Python/Pandas → SQL → Machine Learning (Scikit-Learn) → MLOps.",
        coreConcept: "Data science learning curriculum.",
        quickExample: "df.dropna().groupby('region')['sales'].mean()"
      },
      deeper: {
        tradeoffs: "High model accuracy is useless without business domain knowledge to take action.",
        edgeCases: "Data leakage during machine learning train/test splits."
      },
      functions: ["Statistics & Probability", "Python / R Data Manipulation", "SQL Data Extraction", "Machine Learning Algorithms"],
      objectives: ["Take a messy dataset from raw file to a trained model"],
      keyPoints: ["Domain business knowledge matters as much as technical model accuracy"],
      examples: [{ isCode: true, language: "python", text: "import pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.describe())" }],
      sources: [
        { label: "roadmap.sh AI & Data Scientist", url: "https://roadmap.sh/ai-data-scientist", type: "Guide" },
        { label: "Kaggle Learn Tutorials", url: "https://www.kaggle.com/learn", type: "Interactive Courses" },
        { label: "Scikit-Learn Official Documentation", url: "https://scikit-learn.org/stable/", type: "Official Docs" }
      ]
    },
    {
      term: "Data analysis by language",
      slug: "data-analysis-by-language",
      meaning: "Different ecosystems are strongest at different data analysis tasks.",
      purpose: "Select the optimal language toolkit for data processing requirements.",
      starter: {
        summary: "Python (Pandas, NumPy, Scikit-Learn), R (Tidyverse), SQL (Window functions), Scala/Java (PySpark).",
        coreConcept: "Language-specific data toolkits.",
        quickExample: "Pandas (Python) vs Tidyverse (R) vs SQL"
      },
      deeper: {
        tradeoffs: "Pandas processes data in memory fast up to ~10GB; PySpark distributes processing across clusters for multi-terabyte datasets.",
        edgeCases: "RAM Out-Of-Memory crashes in Pandas on huge CSV files."
      },
      functions: ["Python: Pandas / NumPy", "R: Tidyverse", "SQL: Aggregations & Window functions", "Scala/PySpark: Big Data"],
      objectives: ["Select data analysis toolkits based on dataset scale"],
      keyPoints: ["SQL is often fastest when data is already stored inside a relational database"],
      examples: [{ isCode: true, language: "python", text: "df.groupby(\"region\")[\"sales\"].sum()" }],
      sources: [
        { label: "Pandas Documentation", url: "https://pandas.pydata.org/docs/", type: "Official Docs" },
        { label: "R for Data Science (Hadley Wickham)", url: "https://r4ds.hadley.nz/", type: "Free Book" },
        { label: "PySpark Documentation", url: "https://spark.apache.org/docs/latest/", type: "Official Docs" }
      ]
    },
    {
      term: "Data pipelines & ETL",
      slug: "data-pipelines-etl",
      meaning: "The plumbing that extracts raw data from multiple systems, cleans/transforms it, and loads it into a warehouse.",
      purpose: "Transform raw scattered data into structured data for analytics.",
      starter: {
        summary: "Extract (pull raw data), Transform (clean & format), Load (store in data warehouse like Snowflake/BigQuery).",
        coreConcept: "Automated data transformation pipeline.",
        quickExample: "Extract from API → Clean in Pandas → Load to Snowflake"
      },
      deeper: {
        tradeoffs: "ETL transforms data before loading to save warehouse storage; modern ELT loads raw data first and leverages warehouse compute.",
        edgeCases: "Data schema drift breaking transformation pipelines."
      },
      functions: ["Extract from source DBs/APIs", "Transform data formats", "Load into Data Warehouses"],
      objectives: ["Explain the difference between ETL and ELT"],
      keyPoints: ["Silent pipeline failures are dangerous — implement data quality monitoring"],
      examples: [{ isCode: true, language: "python", text: "raw = extract_from_api()\nclean = raw.dropna().rename(columns={\"amt\": \"amount\"})\nload_to_warehouse(clean)" }],
      sources: [
        { label: "Wikipedia: ETL", url: "https://en.wikipedia.org/wiki/Extract,_transform,_load", type: "Reference" },
        { label: "dbt (data build tool) Docs", url: "https://docs.getdbt.com/", type: "Official Docs" },
        { label: "Apache Airflow Docs", url: "https://airflow.apache.org/docs/", type: "Official Docs" }
      ]
    }
  ]
};

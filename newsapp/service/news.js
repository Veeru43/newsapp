import {articles_url,country_code,mycategory,_api_key} from '../config/rest_config';

export async function getArticles() {

    try {

        let articles = await fetch(`${articles_url}?country=${country_code}&category=${mycategory}&apiKey=${_api_key}`);
        let result = await articles().json();
        articles = null;

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}
package com.shortner.backend.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shortner.backend.entity.Url;
import com.shortner.backend.repository.UrlRepository;

@Service 
public class UrlService {
    
    @Autowired 
    private UrlRepository urlRepository;

    private String generateShortCode(){
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuffer sb = new StringBuffer();
        Random random = new Random();
        for (int i = 0; i < 6; i++) {
            sb.append(characters.charAt(random.nextInt(characters.length())));
        }
        return sb.toString();
    }

    public Url shortenUrl(String originalUrl){
        String shortCode = generateShortCode();

        while (urlRepository.findByShortUrl(shortCode) !=null) {
            shortCode = generateShortCode();
        }
        Url url = new Url(originalUrl, shortCode);
        return urlRepository.save(url);
    }

    public Url getOriginalUrl(String shortUrl){

        return urlRepository.findByShortUrl(shortUrl);
    }

}

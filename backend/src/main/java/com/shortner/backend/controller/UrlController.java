package com.shortner.backend.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shortner.backend.entity.Url;
import com.shortner.backend.service.UrlService;

@CrossOrigin(origins = "*")
@RestController 
@RequestMapping("/urlshortner")
public class UrlController {
    
    @Autowired 
    UrlService urlService;

    @PostMapping("/shortenurl")
    public Url shortenUrl(@RequestBody Url request){
        return urlService.shortenUrl(request.getOriginalUrl());
    }

    @GetMapping("/{shortcode}")
    public ResponseEntity<Void> redirectTOOriginalUrl(@PathVariable("shortcode") String shortCode){
        Url url = urlService.getOriginalUrl(shortCode);

        if(url != null){
            return ResponseEntity.status(302).location(URI.create(url.getOriginalUrl())).build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
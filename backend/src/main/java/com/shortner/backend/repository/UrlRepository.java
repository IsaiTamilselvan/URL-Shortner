package com.shortner.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shortner.backend.entity.Url;

@Repository 
public interface UrlRepository extends JpaRepository<Url,Long>{
    
    public Url findByShortUrl(String shortUrl);
}

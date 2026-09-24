package com.shortner.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity 
@Table (name = "url_mapping")
@Getter 
@Setter 
public class Url {
    
    @Id 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (nullable = false, length = 2048)
    private String originalUrl;

    @Column (nullable = false, unique = true)
    private String shortUrl;

    public Url(){

    }
    public Url(String originalUrl, String shortUrl){
        this.originalUrl=originalUrl;
        this.shortUrl=shortUrl;
    }
}

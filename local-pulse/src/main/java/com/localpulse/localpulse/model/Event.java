package com.localpulse.localpulse;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Data;
import java.time.LocalDateTime;


@Entity
@Data
public class Event {

    @Id
    private String id;

    private String name;
    private LocalDateTime dateTime;
    private String location;
    private String description;

}
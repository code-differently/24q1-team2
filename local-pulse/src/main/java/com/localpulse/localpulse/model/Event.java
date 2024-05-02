
package com.localpulse.localpulse;


import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;


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
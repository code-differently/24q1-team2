package com.localpulse.localpulse;
import javax.persistence.Entity;
import lombok.Data;
@Entity
@Data
public class User {
    private String Email;
    private String Password;
    private String FirstName;
    private String LastName;

}

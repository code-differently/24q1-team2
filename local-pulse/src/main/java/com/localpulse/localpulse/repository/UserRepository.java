package com.localpulse.localpulse;

import com.example.eventapp.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
    
@Repository
public interface UserRepository extends JpaRepository<User, String> {
}

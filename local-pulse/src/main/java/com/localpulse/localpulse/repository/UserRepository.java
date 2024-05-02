package com.localpulse.localpulse;

import com.localpulse.localpulse.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
    
@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);
    User deleteByEmail(String email);
    boolean existsByEmail(String email);
}

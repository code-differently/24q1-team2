package com.localpulse.localpulse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.localpulse.localpulse.repository.EventRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${ticketmaster.apikey}")
    private String apiKey;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(id).orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(String email, User user) {
        if (userRepository.existsByEmail(email)) {
            event.setEmail(email);
            return userRepository.save(user);
        }
        return null;
    }

    public void deleteUser(String email) {
        userRepository.deleteByEmail(email);
    }

    public void fetchDataFromTicketmasterApi() {
        String apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + apiKey;
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);
        if (response.getStatusCode() == HttpStatus.OK) {
            // Process the API response and use it to create or update events
            String responseBody = response.getBody();
            // Process the response body as needed
        } else {
            throw new RuntimeException("Failed to fetch data from Ticketmaster API");
        }
    }

}

    


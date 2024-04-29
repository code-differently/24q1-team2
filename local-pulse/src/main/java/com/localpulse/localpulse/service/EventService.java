package com.example.eventapp.service;

import com.example.eventapp.model.Event;
import com.example.eventapp.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${ticketmaster.apikey}")
    private String apiKey;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(String id) {
        return eventRepository.findById(id).orElse(null);
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(String id, Event event) {
        if (eventRepository.existsById(id)) {
            event.setId(id);
            return eventRepository.save(event);
        }
        return null;
    }

    public void deleteEvent(String id) {
        eventRepository.deleteById(id);
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

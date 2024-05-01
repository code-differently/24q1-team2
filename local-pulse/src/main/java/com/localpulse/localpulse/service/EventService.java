package com.localpulse.localpulse;

import com.localpulse.localpulse.Event;
import com.localpulse.localpulse.EventRepository;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;


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

            String responseBody = response.getBody();

        } else {
            throw new RuntimeException("Failed to fetch data from Ticketmaster API");
        }
    }

}

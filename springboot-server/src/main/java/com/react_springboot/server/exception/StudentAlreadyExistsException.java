package com.react_springboot.server.exception;

/**
 * @author Simpson Alfred
 */

public class StudentAlreadyExistsException extends RuntimeException {
    public StudentAlreadyExistsException(String message) {
        super(message);
    }
}
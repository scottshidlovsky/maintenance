package com.maintenance.user;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/**
 * CRUD operations for a User
 */
public interface UserRepo extends CrudRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}

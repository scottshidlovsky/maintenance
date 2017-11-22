package com.maintenance.user;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.junit.Assert.*;

@DataJpaTest
@RunWith(SpringRunner.class)
public class UserRepoTest {
    @Autowired
    private UserRepo repository;

    @Test
    public void findByEmail() {
        final String email = "scott@scott.com";
        this.repository.save(new User(email, Provider.FACEBOOK));
        Optional<User> notFound = this.repository.findByEmail("scott1@scott.com");
        assertFalse(notFound.isPresent());

        Optional<User> found = this.repository.findByEmail(email);
        assertTrue(found.isPresent());
        User actual = found.get();
        assertEquals(actual.getEmail(), email);
        assertEquals(actual.getProvider(), Provider.FACEBOOK);
    }

}
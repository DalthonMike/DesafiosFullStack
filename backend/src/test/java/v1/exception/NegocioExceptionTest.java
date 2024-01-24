package v1.exception;

import com.desafio.fullstack.desafiofullstack.v1.exception.NegocioException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.mock;

class NegocioExceptionTest {

    @Test
    void testConstructorWithMessage() {
        // Arrange
        String mensagem = "Mensagem de erro";

        // Act
        NegocioException exception = new NegocioException(mensagem);

        // Assert
        assertEquals(mensagem, exception.getMessage());
        assertNull(exception.getCause());
    }

    @Test
    void testConstructorWithMessageAndCause() {
        // Arrange
        String mensagem = "Mensagem de erro";
        Throwable causa = mock(Throwable.class);

        // Act
        NegocioException exception = new NegocioException(mensagem, causa);

        // Assert
        assertEquals(mensagem, exception.getMessage());
        assertEquals(causa, exception.getCause());
    }
}

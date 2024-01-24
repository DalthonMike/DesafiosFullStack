package v1.modelmaper;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractResponseMapper;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AbstractResponseMapperTest {

    private static class ConcreteResponseMapper extends AbstractResponseMapper<Entity, Response> {
        @Override
        public Response toResponse(Entity response) {
            return new Response(response.getId(), response.getName());
        }
    }

    private static class Entity {
        private final Long id;
        private final String name;

        public Entity(Long id, String name) {
            this.id = id;
            this.name = name;
        }

        public Long getId() {
            return id;
        }

        public String getName() {
            return name;
        }
    }

    private static class Response {
        private final Long id;
        private final String name;

        public Response(Long id, String name) {
            this.id = id;
            this.name = name;
        }

        public Long getId() {
            return id;
        }

        public String getName() {
            return name;
        }
    }

    @Test
    void testToResponse() {
        ConcreteResponseMapper mapper = new ConcreteResponseMapper();
        Entity entity = new Entity(1L, "Teste");

        Response response = mapper.toResponse(entity);

        assertEquals(entity.getId(), response.getId());
        assertEquals(entity.getName(), response.getName());
    }

    @Test
    void testToResponseList() {
        ConcreteResponseMapper mapper = new ConcreteResponseMapper();
        Entity entity1 = new Entity(1L, "Teste1");
        Entity entity2 = new Entity(2L, "Teste2");
        List<Entity> entityList = Arrays.asList(entity1, entity2);

        List<Response> responseList = mapper.toResponse(entityList);

        assertEquals(2, responseList.size());

        Response response1 = responseList.get(0);
        assertEquals(entity1.getId(), response1.getId());
        assertEquals(entity1.getName(), response1.getName());

        Response response2 = responseList.get(1);
        assertEquals(entity2.getId(), response2.getId());
        assertEquals(entity2.getName(), response2.getName());
    }
}
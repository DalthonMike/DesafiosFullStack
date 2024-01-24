package v1.modelmaper;

import com.desafio.fullstack.desafiofullstack.modelmapper.AbstractEntityMapper;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AbstractEntityMapperTest {

    private static class ConcreteEntityMapper extends AbstractEntityMapper<Request, Entity> {
        @Override
        public Entity toEntity(Request request) {
            return new Entity(request.getName());
        }
    }

    private static class Request {
        private final String name;

        public Request(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }

    private static class Entity {
        private final String name;

        public Entity(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }

    @Test
    void testToEntity() {
        ConcreteEntityMapper mapper = new ConcreteEntityMapper();
        Request request = new Request("Teste");

        Entity entity = mapper.toEntity(request);

        assertEquals(request.getName(), entity.getName());
    }

    @Test
    void testToEntityList() {
        ConcreteEntityMapper mapper = new ConcreteEntityMapper();
        Request request1 = new Request("Teste1");
        Request request2 = new Request("Teste2");
        List<Request> requestList = Arrays.asList(request1, request2);

        List<Entity> entityList = mapper.toEntity(requestList);

        assertEquals(2, entityList.size());

        Entity entity1 = entityList.get(0);
        assertEquals(request1.getName(), entity1.getName());

        Entity entity2 = entityList.get(1);
        assertEquals(request2.getName(), entity2.getName());
    }
}
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('DemoController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/api/demo (POST)', () => {
    it('should create a demo request with valid data', () => {
      return request(app.getHttpServer())
        .post('/api/demo')
        .send({
          fullName: 'John Doe',
          email: 'john@example.com',
          country: 'US',
          message: 'I would like to request a demo',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body).toHaveProperty('id');
          expect(res.body.fullName).toBe('John Doe');
          expect(res.body.email).toBe('john@example.com');
          expect(res.body.country).toBe('US');
        });
    });

    it('should reject request with missing required fields', () => {
      return request(app.getHttpServer())
        .post('/api/demo')
        .send({
          email: 'john@example.com',
        })
        .expect(400);
    });

    it('should reject request with invalid email', () => {
      return request(app.getHttpServer())
        .post('/api/demo')
        .send({
          fullName: 'John Doe',
          email: 'invalid-email',
          country: 'US',
        })
        .expect(400);
    });

    it('should accept request without message (optional field)', () => {
      return request(app.getHttpServer())
        .post('/api/demo')
        .send({
          fullName: 'Jane Doe',
          email: 'jane@example.com',
          country: 'UK',
        })
        .expect(201);
    });

    it('should reject request with XSS in message', () => {
      return request(app.getHttpServer())
        .post('/api/demo')
        .send({
          fullName: 'John Doe',
          email: 'john@example.com',
          country: 'US',
          message: '<script>alert("xss")</script>Hello',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body.message).not.toContain('<script>');
        });
    });
  });

  describe('/api/demo (GET)', () => {
    it('should return array of demo requests', () => {
      return request(app.getHttpServer())
        .get('/api/demo')
        .expect(200)
        .expect((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
  });
});
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchModule } from './match/match.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.1.90',
      port: 3306,
      database: 'tarsier',
      username: 'tarsier',
      password: 'zhangkuan.123',
      entities: [__dirname + '/entities/**/*.{js,ts}'],
      synchronize: false,
    }),
    PlayerModule,
    MatchModule,
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

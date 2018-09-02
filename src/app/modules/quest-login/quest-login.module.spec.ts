import { QuestLoginModule } from './quest-login.module';

describe('QuestLoginModule', () => {
  let questLoginModule: QuestLoginModule;

  beforeEach(() => {
    questLoginModule = new QuestLoginModule();
  });

  it('should create an instance', () => {
    expect(questLoginModule).toBeTruthy();
  });
});

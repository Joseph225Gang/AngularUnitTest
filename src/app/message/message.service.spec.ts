import { MessageService } from "./message.service";

describe('MessageService', () => {
  let service: MessageService

  beforeEach(() => {
    
  })

  it('should have no messages to start', () => {
    service = new MessageService();

    expect(service.messages.length).toBe(0);
  })

  it('should add a message when add is called', () => {
    service = new MessageService();

    service.add('message1');
    service.add("messag3")

    expect(service.messages.length).toBe(2);
  })

  it('should remove all messages when clear is called', () => {
    service = new MessageService();
    service.add('messager1');
    service.clear();
    service.add('message2')

    expect(service.messages.length).toBe(1);
  })

})
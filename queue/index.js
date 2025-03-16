class QueueVisualizer {
  constructor() {
      this.queue = [];
      this.frontValue = document.getElementById('front-value');
      this.rearValue = document.getElementById('rear-value');
      this.queueContainer = document.getElementById('bucket1');
      this.msgBox = document.getElementById('msg');
      this.input = document.getElementById('input');
      
      this.initEventListeners();
  }

  initEventListeners() {
      document.getElementById('add-node').addEventListener('click', () => this.enqueue());
      document.getElementById('del-node').addEventListener('click', () => this.dequeue());
      document.getElementById('stop').addEventListener('click', () => this.reset());
  }

  enqueue() {
      const value = this.input.value.trim();
      if (!value) {
          this.showMessage('Please enter a value', 'error');
          return;
      }

      this.queue.push(value);
      this.renderQueue();
      this.updateStatus();
      this.showMessage(`Enqueued: ${value}`, 'success');
      this.input.value = '';
  }

  dequeue() {
      if (this.queue.length === 0) {
          this.showMessage('Queue is empty', 'error');
          return;
      }

      const removedValue = this.queue.shift();
      this.renderQueue();
      this.updateStatus();
      this.showMessage(`Dequeued: ${removedValue}`, 'success');
  }

  reset() {
      this.queue = [];
      this.renderQueue();
      this.updateStatus();
      this.showMessage('Queue reset', 'success');
  }

  renderQueue() {
      this.queueContainer.innerHTML = this.queue
          .map(value => `<div class="queue-item">${value}</div>`)
          .join('');
  }

  updateStatus() {
      this.frontValue.textContent = this.queue[0] || 'None';
      this.rearValue.textContent = this.queue[this.queue.length - 1] || 'None';
  }

  showMessage(text, type = 'info') {
      const message = document.createElement('div');
      message.className = `message ${type}`;
      message.textContent = text;
      this.msgBox.prepend(message);
      
      setTimeout(() => message.remove(), 3000);
  }
}

// Initialize the queue visualizer
new QueueVisualizer();
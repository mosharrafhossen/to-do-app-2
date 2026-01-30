
  let tasks = [];
  const MAX_TASKS = 10;
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  function addTask(){
    const value = taskInput.value.trim();
    if(value === ""){
      alert("অনুগ্রহ করে একটি কাজ লিখুন!");
      return;
    }
    if(tasks.length >= MAX_TASKS){
      alert("আপনি সর্বোচ্চ ১০টি কাজ যোগ করতে পারেন!");
      return;
    }

    tasks.push({text:value, done:false});
    taskInput.value = ""; // ইনপুট বক্স খালি করা
    updateTaskList();
  }

  function updateTaskList(){
    taskList.innerHTML = "";
    tasks.forEach((task,index)=>{
      const div = document.createElement('div');
      div.className = 'task-item';
      div.innerHTML = `
        <span class="task-text ${task.done ? 'done' : ''}">${index+1}. ${task.text}</span>
        <div class="btn-group">
          <button class="complete-btn" onclick="markComplete(${index})">✅ সম্পূর্ণ</button>
          <button class="incomplete-btn" onclick="markIncomplete(${index})">🔁 অসম্পূর্ণ</button>
          <button class="delete-btn" onclick="deleteTask(${index})">❌ Delete</button>
        </div>
      `;
      taskList.appendChild(div);
    });
  }

  function markComplete(index){
    tasks[index].done = true;
    updateTaskList();
  }

  function markIncomplete(index){
    tasks[index].done = false;
    updateTaskList();
  }

  function deleteTask(index){
    tasks.splice(index,1);
    updateTaskList();
  }

  function restart(){
    tasks = [];
    taskInput.value = "";
    updateTaskList();
  }




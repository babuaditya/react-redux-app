import { useEffect, useState } from 'react';
import './Container.css';

type Container = {
  id: string | number;
  name: string;
};

type Task = {
  id: string | undefined;
  taskName: string;
  containerId: string | number;    
};


const ContainerBox = ({ id, name, tasks, setDestinationID,setSource }: { id: string | number; name: string; tasks: Task[],setDestinationID:(id:string|number)=>void,setSource:()=>void }) => {
  return (
    <div id={String(id)} className="bg-gray-200 p-4 min-w-0 flex-1 rounded-lg w-full  min-h-[00px] flex flex-col space-y-4"  
    onDragEnter={(e)=>{console.log("drop over");e.preventDefault();console.log(e); console.log(id); console.log("drag enter") } }
    onDragOver={(e)=>{console.log("drop over");e.preventDefault(); console.log(e);console.log(id); }}
    onDragLeave={(e)=>{console.log("drop leave");e.preventDefault(); console.log(e); console.log(id); }}
    onDrop={(e)=>{setDestinationID(id)}}
    >
      <h3 className="text-xl font-bold mb-4 text-center">{name}</h3>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} id={task.id} taskName={task.taskName} containerId={task.containerId} setSource={setSource} />
        ))}
      </div>
    </div>
  );
};

const TaskItem = ({ id, taskName, containerId,setSource }: Task ) => {
  return (
    <div id={String(id)} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" draggable="true"  onDragStart={(e)=>{
      console.log(e);
      console.log(id);
    }}
    onDragEnd={(e)=>{
      console.log("drag end")
      console.log("task id",id)

      console.log("container",containerId)
      setSource({
        containerId:containerId,
        taskId:id
      })
    }}
    >
      <p className="text-lg font-medium text-gray-800">{taskName}</p>
      <p className="text-sm text-gray-500">Container ID: {containerId}</p>
    </div>
  );
};

export const Container = () => {
  const [containers, setContainers] = useState<Container[]>([
    { id: '1', name: 'Todo Task' },
    { id: '2', name: 'In Progress' },
    { id: '3', name: 'Done' },
    {id:'4',name:"Blocked"}
  ]);

  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', taskName: 'Task 1', containerId: '1' },
    { id: '2', taskName: 'Task 2', containerId: '3' },
    { id: '3', taskName: 'Task 3', containerId: '2' },
    { id: '4', taskName: 'Task 4', containerId: '1' },
    { id: '5', taskName: 'Task 5', containerId: '2' },
  ]);

  const [source,setSource]=useState({
    containerId:undefined,
    taskId:undefined

  })

  const [destinationID,setDestinationID]=useState<string|number|undefined>(undefined) 

  useEffect(()=>{
    if(source?.containerId!==destinationID){
      const updatedTask=tasks.map((task)=>{
        if(task.id===source.taskId){
          task.containerId=destinationID as string
        }
        return task
      })
      setTasks(updatedTask)
    }  
  },[source,destinationID])



  return (
    <div className="flex flex-wrap gap-6 p-6">
      {containers.map(({ id, name }) => {
        const containerTasks = tasks.filter((task) => task.containerId === id);
        return <ContainerBox key={id} id={id} name={name} tasks={containerTasks} setDestinationID={setDestinationID}  setSource={setSource}/>;
      })}
    </div>
  );
};

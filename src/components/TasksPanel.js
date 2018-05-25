import React from "react";

const TasksPanel = () => {
    return(
        <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
        </div>
        <div className="panel-body">
            <div className="list-group">
                {/*   <TaskItem>    */}
                <a href="#" className="list-group-item">
                    <span className="badge">just now</span>
                    <i className="fa fa-fw fa-calendar"></i> Calendar updated
                </a>
                {/*   </TaskItem>    */}
                
            </div>
            <div className="text-right">
                <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div>
    );
};

export default TasksPanel;

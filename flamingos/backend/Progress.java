import java.io.*;
import java.util.*;

public class Progress {
    private int tasks;
    private int nodeNumber;
    private int completedTasks;
    private int completedNodes;
    private double percentComplete;
    private int completedTasks2;
    private ArrayList<Tree> nodeTasks = new ArrayList<Tree>();
    
    
    public Progress()
    {

    }

    //Tracks tasks in tree
    public int totalTasksInTree(Tree tree){
        tasks = tree.getSize(tree.getTree() );
        return tasks;
    }
    //Adds task to tree
    public void incrementTaskCount(Tree tree){
        nodeTasks.add(tree);
        tasks++;
    }

    //removes task from tree
    public void decrementTaskCount(Tree tree){
        nodeTasks.remove(tree);
        tasks--;
    }

    //Tracks progress in tree task completion
    public int getTreeProgress(Tree tree){
        nodeNumber = (tree.getSize(tree.getTree() ) - completedTasks);
        return nodeNumber;
    }
    public int totalTasksCompleted(Tree tree){

        for(int i = 0; i < nodeTasks.size(); i++ )
        {
            
            for(int j = 0; j < (nodeTasks.get(i)).getTree().size(); j++)
            if((nodeTasks.get(i)).getTree().get(j).isComplete == true)
            {
                completedTasks++;
            }
        }

        return completedTasks;
    }

    //Returns number of tasks completed
    public int tasksCompletedForTree(Tree tree){
         completedTasks2 = tree.getTasks(tree.getTree());
        return completedTasks2++;
    }

    //returns tasks to be done for tree
    public int tasksRemainingForTree(Tree tree){
        int remainder = tree.getSize(tree.getTree() ) - completedTasks;
        return remainder;
    }

    //sets percent value of task bar completed
    public void updateProgressBar(Tree tree){
        //updates progress bar for a tree
        percentComplete = (completedTasks2/tasks) * 100;
    }

    //Returns Progress Percentage Value
    public double getProgressBarStatus(Tree tree)
    {
        return percentComplete;
    }

    //Marks a task as complete
    public void completeTask(Node node){
        //marks a node complete
        node.setComplete();
        completedNodes++;
    }
}

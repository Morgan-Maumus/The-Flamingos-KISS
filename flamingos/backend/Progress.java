import java.io.*;
import java.util.*;

public class Progress {
    private int tasks;
    private int nodeNumber;
    private int completedTasks;
    private int completedNodes;
    private ArrayList<Tree> nodeTasks = new ArrayList<Tree>();
    
    public Progress()
    {
        
    }

    //Tracks tasks in tree
    public static int totalTasksInTree(Tree tree){
        tasks = tree.getSize();
        return tasks;
    }
    //Adds task to tree
    public static void incrementTaskCount(Tree tree){
        nodeTasks.add(tree);
        tasks++;
    }

    //removes task from tree
    public static void decrementTaskCount(Tree tree){
        nodeTasks.remove(tree);
        tasks--;
    }
    
    //Tracks progress in tree task completion
    public static int getTreeProgress(Tree tree){
        int nodeNumber = (tree.getSize() - completedTasks);
        return nodeNumber;
    }
    public static int totalTasksCompleted(Tree tree){
       
        for(int i = 0; i < nodeTasks.length(); i++ )
        {
            if(nodeTasks(i).isComplete == true)
            {
                completedTasks++;
            }
        }
        
        return completedTasks;
    }
    
    //Returns number of tasks completed
    public static int tasksCompletedForTree(Tree tree){
        int completedTasks2 = 0; 
        completedTasks2 = tree.getTasks();
        return completedTasks2++;
        }
    
    //returns tasks to be done for tree
    public static int tasksRemainingForTree(Tree tree){
        remainder = tree.getSize() - completedTasks;
        return remainder;
    }
    public static void updateProgressBar(Tree tree){
        //updates progress bar for a tree

    }
    
    //Marks a task as complete
    public static void completeTask(Node node){
        //marks a node complete
        node.setComplete();
        completedNodes++;        
    }
}

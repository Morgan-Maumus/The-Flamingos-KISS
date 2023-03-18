public class Progress {
    private int tasks;
    private int nodeNumber;
    private int completedTasks;
    private int completedNodes;
    private ArrayList<Tree> nodeTasks = new ArrayList<Tree>();

    public static int totalTasksInTree(Tree tree){
        //returns total number of nodes in the tree
        return tasks;
    }

    public static void incrementTaskCount(Tree tree){
        nodeTasks.add(tree);
        tasks++;
    }

    public static void decrementTaskCount(Tree tree){
        nodeTasks.remove(tree);
        tasks--;
    }
    public static int getTreeProgress(Tree tree){
        //returns total number of nodes in the tree
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
    public static int tasksCompletedForTree(Tree tree){
        //returns total number of nodes completed in the tree
        return 0;
    }
    public static int tasksRemainingForTree(Tree tree){
        remainder = tasks - completedTasks;
        return remainder;
    }
    public static void updateProgressBar(Tree tree){
        //updates progress bar for a tree

    }
    public static void completeTask(Node node){
        //marks a node complete
        completedNodes++;        
    }
}

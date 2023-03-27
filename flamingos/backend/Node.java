import java.lang.reflect.Array;
import java.util.LinkedList;
import java.util.ArrayList;

public class Node {
    //constructor for the node
        //if the node is completed, add 1 to the number of nodes completed
        int nodesCompleted = 0;
        boolean isComplete;
        for(i=0; i<nodeChildren.length; i++){
         nodesCompleted ++;
        }
        
    //determines if a node is the root/ main task
    public static boolean isRoot(Node node){
        private boolean isRoot;
        if(nodeParent == null){
            isRoot = true;
        }
        else{
            isRoot = false;
        }
    }

    //variable that contains the node's children
    private static ArrayList nodeChildren = new ArrayList<String>(); 
    for(i=0; i<node.length; i++){
        nodeChildren.add(node(i+1));
    }

    //variable for the title of the node
    private String nodeTitle = "Node Title";

    //variable for the node description
    private String nodeDescription;

    //variable for the node parent
    //private Node nodeParent = Node(i-1);
    private Node nodeParent = new node(new Runnable(){
        public void run(){
            if (Node(i-1) < 0){
                nodeParent = null;
            }
            else{
                nodeParent = Node(i-1);
            }
        }
    });

    //gets the title of the node
    public static String getTitle(Node node){
        return node.nodeTitle;
    }

    //sets the title of the node
    public static String setTitle(Node node){
        String title;
        for(int i=0; i<nodeChildren.length; i++){
            if (node = nodeChildren(i)){
                title = getParent(nodeChildren(i));
                
            }
        }
        return title;
    }

    //returns the node's description
    public static String getDescription(Node node){
        return node.nodeDescription;
    }

    //sets the nodes description
    public static void setDescription(Node node){
    //sets the node's description
        getDescription(node);
    }

    //returns the node's children
    public static ArrayList getChildren(Node node){
        return nodeChildren;
    }

    //deletes a node's child
    public static void deleteChild(Node child, Node parent){
       for(i=0; i<nodeChildren.length; i++){
              if(nodeChildren(i) == child){
                nodeChildren.remove(i);
              }
         }
    }

    //returns whether a node has children
    public static boolean hasChild(Node node){
        if(nodeChildren.length > 0){
            return true;
        }
        else{
            return false;
        }
    }

    //returns the node's parents
    public static Node getParent(Node node){
        return nodeParent;
    }
    
    //Sets a node as complete
    public void setComplete()
    {
        isComplete = true;
}
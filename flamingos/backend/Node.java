import java.lang.reflect.Array;

public class Node {
    // variable for number of nodes that is completed
    private int nodesCompleted;

    //determines if a node is the root/ main task
    private boolean isRoot;

    //variable that contains the node's children
    private Array nodeChildren;

    //variable for the title of the node
    private String nodeTitle;

    //variable for the node description
    private String nodeDescription;

    //variable for the node parent
    private Node nodeParent;

    //gets the title of the node
    public static String getTitle(Node node){
        return node.nodeTitle;
    }

    //sets the title of the node
    public static void setTitle(Node node){

    }

    //returns the node's description
    public static String getDescription(Node node){
        return node.nodeDescription;
    }

    //sets the nodes description
    public static void setDescription(Node node){

    }

    //returns the node's children
    public static Array getChildren(Node node){
        return node.nodeChildren;
    }

    //deletes a node's child
    public static void deleteChild(Node child, Node parent){

    }

    //returns whether a node has children
    public static boolean hasChild(Node node){
        return false;
    }

    //returns the node's parents
    public static Node getParent(Node node){
        return node.nodeParent;
    }
}
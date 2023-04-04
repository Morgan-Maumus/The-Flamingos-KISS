import java.util.ArrayList;
//:)
public class Node {
    private int nodesCompleted = 0;
    private ArrayList<Node> nodeChildren = new ArrayList<>();
    private String nodeTitle;
    private String nodeDescription;
    public boolean isComplete = false;
    private Node nodeParent = null;

    // Constructor for the node class
    public Node(String title) {
        this.nodeTitle = title;
    }

    // Method to add a child node to this node's list of children
    public void addChild(Node child) {
        nodeChildren.add(child);
        child.setParent(this);
    }

    // Method to get the number of completed nodes
    public int getNodesCompleted() {
        return nodesCompleted;
    }

    // Method to set the number of completed nodes
    public void setNodesCompleted(int nodesCompleted) {
        this.nodesCompleted = nodesCompleted;
    }

    // Method to check if a node is the root/main task
    public boolean isRoot() {
        if (nodeParent == null) {
            return true;
        } else {
            return false;
        }
    }

    // Method to get the title of the node
    public String getTitle() {
        return nodeTitle;
    }

    // Method to set the title of the node
    public void setTitle(String title) {
        this.nodeTitle = title;
    }

    // Method to get the node's description
    public String getDescription() {
        return nodeDescription;
    }

    // Method to set the node's description
    public void setDescription(String description) {
        this.nodeDescription = description;
    }

    // Method to get the node's children
    public ArrayList<Node> getChildren() {
        return nodeChildren;
    }

    // Method to delete a node's child
    public void deleteChild(Node child) {
        nodeChildren.remove(child);
    }

    // Method to check if a node has children
    public boolean hasChildren() {
        return !nodeChildren.isEmpty();
    }

    // Method to get the node's parent
    public Node getParent() {
        return nodeParent;
    }

    // Method to set the node's parent
    public void setParent(Node parent) {
        this.nodeParent = parent;
    }

    // Method to set a node as complete
    public void setComplete() {
         isComplete = true;
    }

    // Method to check if a node is complete
    public boolean isComplete() {
        return isComplete;
    }
}

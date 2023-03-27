import java.util.ArrayList;
import java.util.Objects;

public class Tree {

    // actually implemented as an array list instead of a tree

    public Tree() {
        ArrayList<Node> thisTree = new ArrayList<>();
        thisTree.clear(); // guarantee an empty tree to begin w/
    }

    // Returns the size of a given tree
    public int getSize(ArrayList<Node> thisTree) {
        return thisTree.size();
    }

    // Returns whether a given arrayList is empty or not
    public boolean isEmpty(ArrayList<Node> thisTree) {
        if (thisTree.size() == 0) {
            return true;
        } else {
            return false;
        }
    }

    // Inserts a node into the arrayList
    public void insertNode(ArrayList<Node> thisTree, Node node) {
        thisTree.add(node);
        return;
    }

    // Deletes node from arrayList
    public static void deleteNode(ArrayList<Node> thisTree, Node inNode) {
        if (thisTree.size() == 0) {
            System.out.println("Tree is empty.");
            return;
        }
        for (int i = 0; i < thisTree.size(); i++) {
            Node tempNode = thisTree.get(i);
            if (Objects.equals(tempNode.getTitle(tempNode), inNode.getTitle(inNode)))
            // if(tempNode.getUID(tempNode)= inNode.getTitle(inNode))
            {
                thisTree.remove(i); // if found delete element for index i
                return; // return so loop stops
            }
        }
        System.out.println("Unable to locate node to delete.");
        return; // if loop is completed, and no node is found then return
    }

    // Searches arrayList for a node
    // Searches arrayList based on unique titles
    public int searchTree(ArrayList<Node> thisTree, Node inNode) {
        if (thisTree.size() == 0) {
            System.out.println("Tree is empty.");
            return -1;
        }
        for (int i = 0; i < thisTree.size(); i++) {
            Node tempNode = thisTree.get(i);
            if (Objects.equals(tempNode.getTitle(tempNode), inNode.getTitle(inNode)))
            // if(tempNode.getUID(tempNode)= inNode.getTitle(inNode))
            {
                return i; // if found, return index into arrayList of search item
            }
        }
        return -1; // if loop is completed, and no item is found then return -1
    }

    // clear array along with its nodes
    public void clearTree(ArrayList<Node> thisTree) {
        thisTree.clear();
        return;
    }
    
    //Gets number of completed tasks in tree
    public int getTasks()
    {
        int taskTracker = 0;
        for(int i = 0; i = thisTree.size(); i++)
        {
            if(thisTree.get(i).isComplete == true)
            {
                taskTracker++;
            }
        }
        return taskTracker;
    }

}

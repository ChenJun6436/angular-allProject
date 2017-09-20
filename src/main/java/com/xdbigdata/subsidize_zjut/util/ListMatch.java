package com.xdbigdata.subsidize_zjut.util;

import com.xdbigdata.jwtService.domain.Student;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by LiWan on 2016/7/15.
 */
public class ListMatch {

    /*public static void main(String args[]) {
        List<Student> students = new ArrayList<>();
        Student stu1 = new Student();
        stu1.setUserName("201421060239");
        students.add(stu1);
        Student stu2 = new Student();
        stu2.setRealName("wanli");
        stu2.setUserName("201421060240");
        students.add(stu2);
        Student stu3 = new Student();
        stu3.setUserName("201421070239");
        students.add(stu3);
        Student stu4 = new Student();
        stu4.setUserName("201521060239");
        students.add(stu4);
        Student stu5 = new Student();
        stu5.setUserName("201422097865");
        students.add(stu5);

        TreeNode root = new ListMatch().buildTree(students, 4);

        Student stu = searchStudentTree(root, "201421060240", 4, 0);

        if (stu == null) System.out.println("========== stu=null");
        else {
            System.out.println("real name:" + stu.getRealName());
        }
    }*/

    /**
     * 查找树
     *
     * @param root       树根节点
     * @param studentId  需要查找的学生学号
     * @param byteNumber 每次分割位数
     * @return
     */
    public static Student searchStudentTree(TreeNode root, String studentId, int byteNumber, int startIndex) {
        if (root == null) return null;
        if (root.getStudent() != null) {
            if (root.getStudent().getSn().equals(studentId)) {
                return root.getStudent();
            } else {
                return null;
            }
        }

        //检查与当前串不匹配
        if (byteNumber + startIndex >= studentId.length()) return null;
        if (root.getFather() != null) {
            if (!studentId.substring(startIndex, startIndex + byteNumber).equals(root.getPartStudentName())) {
                return null;
            }
        }

        Student stu = null;
        List<TreeNode> nodes = root.getChildren();
        for (TreeNode node : nodes) {
            if (root.getFather() != null)
                stu = searchStudentTree(node, studentId, byteNumber, startIndex + byteNumber);
            else
                stu = searchStudentTree(node, studentId, byteNumber, startIndex);
            if (stu != null) {
                break;
            }
        }
        return stu;
    }

    /**
     * 建立查找树
     *
     * @param studentList
     * @param byteNumber  建树所需每个节点所需索引个数
     * @return
     */
    public TreeNode buildTree(List<Student> studentList, int byteNumber) {
        if (studentList == null || studentList.size() == 0) return null;

        //建立查找树
        TreeNode root = new TreeNode();
        for (Student student : studentList) {
            build(student, root, byteNumber, 0);
        }
        return root;
    }

    private void build(Student student, TreeNode root, int byteNumber, int fromIndex) {
        if (student.getSn() == null || "".equals(student.getSn())) return;
        String studentName = student.getSn();
        String partStuName = studentName.substring(fromIndex, ((fromIndex + byteNumber > studentName.length()) ? (studentName.length()) : (fromIndex + byteNumber)));

        boolean found = false;
        List<TreeNode> treeNodes = root.getChildren();
        for (TreeNode tn : treeNodes) {
            if (tn.getPartStudentName().equals(partStuName)) {
                if (fromIndex + byteNumber < studentName.length()) {//判断是否是叶子，非叶子节点需要继续递归
                    build(student, tn, byteNumber, fromIndex + byteNumber);
                }
                found = true;
                break;
            }
        }
        if (!found) {
            TreeNode tn = new TreeNode();
            tn.setFather(root);
            tn.setPartStudentName(partStuName);
            root.addChild(tn);
            if (fromIndex + byteNumber < studentName.length()) {//非叶子节点，继续递归
                build(student, tn, byteNumber, fromIndex + byteNumber);
            } else {//叶子节点，结束递归
                tn.setStudent(student);
            }
        }
    }

    public class TreeNode {
        private List<TreeNode> children;
        private TreeNode father = null;
        String partStudentName = null;
        private Student student = null;//不为null的时候为叶子节点

        public TreeNode() {
            children = new ArrayList<>();
        }

        public void addChild(TreeNode treeNode) {
            if (this.children == null) children = new ArrayList<>();
            children.add(treeNode);
        }

        public Student getStudent() {
            return student;
        }

        public List<TreeNode> getChildren() {
            return children;
        }

        public void setChildren(List<TreeNode> children) {
            this.children = children;
        }

        public TreeNode getFather() {
            return father;
        }

        public void setFather(TreeNode father) {
            this.father = father;
        }

        public void setStudent(Student student) {
            this.student = student;
        }

        public String getPartStudentName() {
            return partStudentName;
        }

        public void setPartStudentName(String partStudentName) {
            this.partStudentName = partStudentName;
        }
    }
}

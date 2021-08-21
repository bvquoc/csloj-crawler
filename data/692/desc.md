Một mặt bàn nằm ngang được chia làm lưới ô vuông, trong mỗi ô có ghi một số tự nhiên.

<center><img src="/images/problems/692/XUCXAC.png" width="300px" /></center>

Cho một con xúc xắc nằm vừa vặn trên một ô của lưới. Mỗi mặt của xúc xắc là một số từ ~1~ đến ~6~. Ban đầu, mặt trước là số ~1~, mặt trên là số ~2~ và mặt bên phải là số ~3~, các mặt đối diện có tổng số là ~7~. Mỗi lần, con xúc xắc có thể lăn về phía trái, phải, trước, sau. Mỗi lần tiếp xúc với mặt bàn, ta mất một chi phí bằng số ghi trên ô mà xúc xắc đang nằm trên nhân với số trên mặt của xúc xắc đang tiếp xúc với mặt bàn.

Hãy tìm cách lăn từ một ô đến một ô khác trên mặt bàn để đạt chi phí nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu ghi hai số ~M, N\ (1 ≤ M, N ≤ 50)~ lần lượt là số dòng và số cột của lưới ô trên mặt bàn;
- ~M~ dòng sau, mỗi dòng ghi ~N~ số nguyên dương không quá ~100~ là số ghi trên các ô lưới của mặt bàn. Các dòng được liệt kê theo thứ tự từ xa đến gần, các số trên mỗi dòng liệt kê từ trái sang phải.
- Dòng cuối ghi hai cặp số lần lượt là tọa độ (dòng, cột) của ô bắt đầu và ô kết thúc.

## Dữ liệu ra:
- Ghi ra một số duy nhất là chi phí nhỏ nhất tìm được.

## Ví dụ
#### Dữ liệu vào:
```
3 3
1 2 3
4 5 6
7 8 9
2 2 3 3
```

#### Dữ liệu ra:
```
52
```
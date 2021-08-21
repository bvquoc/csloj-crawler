**<center>CSP Open Contest 4</center>**

Đất nước ~X~ có ~N~ thành phố được đánh số từ ~1~ đến ~N~ và các thành phố được kết nối với nhau bằng ~M~ con đường hai chiều. Đảm bảo ~N~ thành phố liên thông với nhau. Do liên tục bị bão đánh vào, đất nước đã họp bàn để đưa ra một kế hoạch. Cụ thể có ~Q~ kế hoạch được đề xuất có dạng một thành phố ~u~ và ~K~ thành phố quan trọng ~v_1, v_2, \dots, v_K~. Các thành phố quan trọng này sẽ cần phải họp vào một thời điểm nhất định nào đó và dự kiến trong khoảng thời gian đó thành phố ~u~ sẽ bị ngập hoàn toàn (điều đó đồng nghĩa với việc tất cả những con đường nối với đỉnh ~u~ đều không thể sử dụng được). Ban lãnh đạo muốn tìm kiếm một thành phố bất kì sao cho ~K~ thành phố cho trên đều có thể tụ họp tại thành phố này để họp bàn công việc.

Vì việc tính toán rất khó khăn nên ban lãnh đạo muốn giao lại cho các thí sinh chuẩn bị thi VOI. Các bạn hãy xác định xem với mỗi kế hoạch nêu trên ta có thể thực hiện được nó hay không nhé!

## Dữ liệu vào:
- Dòng đầu tiên bao gồm hai số nguyên ~N, M~ tương ứng là số thành phố và số con đường;
- ~M~ dòng tiếp theo, mỗi dòng gồm hai đỉnh ~u~ và ~v~ mô tả một con đường;
- Dòng tiếp theo bao gồm một số nguyên ~Q~ là số truy vấn.
- ~Q~ dòng tiếp theo, dòng thứ ~i~ bao gồm các số ~u, K, v_1, v_2, \dots, v_K~ mô tả một truy vấn. Dữ liệu đảm bảo ~u, v_1, v_2, \dots, v_K~ đôi một phân biệt.

Chú ý là các truy vấn độc lập với nhau.

## Dữ liệu ra:
- Ghi ra ~Q~ dòng, dòng thứ ~i~ in ra "Yes" nếu tồn tại phương án để giải quyết, ngược lại thì in ra "No".

## Ví dụ:
#### Dữ liệu vào:
```
8 9
1 2
2 3
3 4
3 5
2 6
6 7
1 6
1 8
8 3
3
3 2 4 5
6 4 3 4 5 8
2 4 5 3 1 6
```

#### Dữ liệu ra:
```
No
Yes
Yes
```
<center><img src="/images/problems/1462/CITIES.png" width="250px" /></center>

## Giới hạn:
- Trong tất cả các test, ~N, Q ≤ 2 \times 10^5, M ≤ 4 \times 10^5; 1 ≤ u, v_1, v_2, ..., v_K ≤ N, 2 ≤ K < N~;
- Tổng ~K~ trong các truy vấn không vượt quá ~2 \times 10^5~;
- Subtask ~\#1: 10\%~ số điểm có ~u~ bằng nhau với mọi truy vấn;
- Subtask ~\#2: 10\%~ số điểm khác só ~N ×Q ≤ 10^6~;
- Subtask ~\#3: 30\%~ số điểm khác có ~K ≤ 20~ với mọi truy vấn;
- Subtask ~\#4: 50\%~ số điểm không có giới hạn gì thêm.
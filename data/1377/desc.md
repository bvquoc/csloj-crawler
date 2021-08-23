**<center>NGUỒN: Đề thi chọn đội tuyển HSGQG - Đà Lạt - Năm 2019-2020</center>**

Cho $S$ là tập các điểm có tọa độ nguyên trên mặt phẳng. Có ba thao tác với tập điểm đã cho:
- Thao tác $1$: Thêm một điểm vào $S$;
- Thao tác $2$: Loại bỏ một điểm ra khỏi tập $S$;
- Thao tác $3$: Trả lời câu hỏi:  Cho trước một điểm, hỏi diện tích lớn nhất của tam giác vuông lấy điểm cho trước làm đỉnh góc vuông, hai cạnh bên song song với hai trục tọa độ và hai đỉnh còn lại của tam giác thuộc tập điểm trong tập $S$.

**Yêu cầu:** Cho tập $S$ và dãy gồm $q$ thao tác, hãy viết chương trình thực hiện $q$ dãy thao tác đã cho và trả lời câu hỏi khi thực hiện thao tác $3$.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên $n$ và $q$, lần lượt là số lượng điểm của tập $S$ lúc xuất phát và số lượng thao tác cần thực hiện $(3<n, q ≤ 10^5)$;
- Tiếp theo là $n$ dòng, mỗi dòng ghi hai số nguyên là tọa độ một điểm trong tập $S$;
- Tiếp theo là $q$ dòng, mỗi dòng trong số các dòng này, chứa thông tin một thao tác cần thực hiện. có một trong ba dạng như sau:
    - $1\ x\ y$: Yêu cầu thực hiện thao tác $1$, bổ sung điểm có tọa độ $(x, y)$ vào tập $S$;
    - $2\ x\ y$: Yêu cầu thực hiện thao tác $2$, loại bỏ điểm có tọa độ $(x, y)$ ra khỏi tập $S$;
    - $3\ x\ y$: Yêu cầu thực hiện thao tác $3$, với điểm cho trước có tọa độ $(x,y)$;

Đối với thao tác $2$, dữ liệu đảm bảo rằng điểm tọa độ $(x, y)$ có trong tập $S$ và dữ liệu đãm bảo ở bất cứ thời điểm nào, tập $S$ không chứa hai điểm trùng nhau. $( 0< x, y ≤ 10^9)$.

## Dữ liệu ra:
- Đối với thao tác $3$, hãy đưa ra trên một dòng một số nguyên hoặc số thực có một chữ số thập phân (nếu kết quả không là số nguyên). Nếu không có tam giác vuông nào thỏa mảng các tính chất như đã nêu thì xuất ra kết quả là $0$.

## Ví dụ:
### Dữ liệu vào:
```
7 10
1 1
1 4
2 3
2 4
3 2
4 4
-3 6
3 1 2
3 3 4
2 1 4
3 3 4
1 7 4
3 3 4
3 1 2
3 4 1
2 1 1
3 1 2
```

### Dữ liệu ra:
```
2
2
1
4
1
4.5
0
```

### Giải thích:
***<center><img src="/images/problems/1377/TRIANGLE.png" width="600px" /> <br>Hình minh họa</center>***

Kết quả các thao tác $3$ như sau:
- $(1,2) (3, 2) (1,4)$;
- $(3, 4) (3,2) (1, 4)$;
- $(3, 4) (3,2) ((2, 4)\text{ hoặc }(4,4))$;
- $(3, 4) (3,2) ((7, 4)$;
- $(1, 2) (1, 1) (3, 2)$;
- $(4, 1) (1,1) (4, 4)$;
- Không có tam giác;

## Giới hạn:
+ Subtask $\#1: 60\%$ số điểm của bài có $3< 𝑛, q ≤ 10^3$; 
+ Subtask $\#2: 40\%$ số điểm của bài có  $10^3< 𝑛, q ≤ 10^5$.
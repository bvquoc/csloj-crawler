<!--
**<center>Nguồn: Đề CHỌN ĐỘI TUYỂN HSG QUỐC GIA NĂM HỌC 2020 - 2021 - HƯNG YÊN</center>**
-->
Cho đa giác lồi $P$ gồm $n$ điểm $A_1,A_2,…,A_n$ và tập $B$ gồm $m$ điểm $B_1,B_2,…,B_m$. Với mỗi điểm trong số $m$ điểm trong tập $B$, xác định xem điểm đó có nằm hoàn toàn bên trong đa giác $P$ hay không.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $n\ (3≤n≤5×10^3)$ là số đỉnh của đa giác lồi;
- Mỗi dòng trong số $n$ dòng tiếp theo chứa cặp toạ độ của một đỉnh của đa giác lồi, hai số được ghi cách nhau bởi dấu cách.
- Dòng tiếp theo là số nguyên $m\ (2≤m≤10^5)$;
- $m$ dòng cuối, dòng thứ $i\ (1≤i≤m)$ chứa hai số nguyên $x_i,y_i$ xác định tọa độ điểm $B_i$. Hai số được phân cách nhau bởi dấu cách là toạ độ.

Các toạ độ là số nguyên có trị tuyệt đối không vượt quá $10^6$.

## Dữ liệu ra:
- Ghi ra $m$ dòng, dòng thứ $i\ (1≤i≤m)$ chứa câu trả lời cho điểm $B_i$. Ghi `1` nếu điểm điểm $B_i$ nằm hoàn toàn bên trong đa giác. Ghi `0` nếu điểm $B_i$ nằm trên cạnh hoặc nằm ngoài đa giác.

## Ví dụ:
#### Dữ liệu vào:
```
4
-2 3
-2 -1
3 -1
3 3
3
1 2
-2 1
4 1
```

#### Dữ liệu ra:
```
1
0
0
```

## Giới hạn:
- $30\%$ số test tương ứng $30\%$ số điểm có $n,m≤1000$;
- $30\%$ số test khác tương ứng $30\%$ số điểm có $n≤5000; m≤10^4$;
- $40\%$ số test còn lại tương ứng $40\%$ số điểm có $n≤5000;m≤10^5$.
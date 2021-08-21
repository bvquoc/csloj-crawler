<!--
**<center>NGUỒN: Hội thảo Duyên Hải 2016 - Lê Thanh Bình</center>**
-->
Có một cuộc đua xe đạp được tổ chức trên một hòn đảo. Có $N$ vùng trên hòn đảo này, các vùng đánh số từ $1$ đến $N$. Đồng thời có $M$ con đường một chiều nối giữa hai vùng. Cuộc đua xe đạp bắt đầu ở vùng số $1$ và kết thúc ở vùng số $2$.

Hỏi rằng có bao nhiêu đường đua xe đạp khác nhau?. Hai đường đua xe đạp gọi là khác nhau nếu như nó không có cùng tập hợp các tuyến đường.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $N, M$ là số vùng và số con đường $(1≤N≤10^4, 1≤M≤10^5)$;
- $M$ dòng tiếp theo, mỗi dòng ghi hai số $A,B$ mô tả một con đường nối từ $A$ đến $B$. Các vùng có thể được nối với nhau bởi nhiều hơn một con đường.

## Dữ liệu ra:
- Một số nguyên duy nhất là số lượng đường đua khác nhau. Nếu như số này có nhiều hơn $9$ chữ số thì chỉ giữ lại $9$ chữ số cuối cùng của nó.  Nếu như có vô số đường đua thì ghi `inf`.

## Ví dụ:
#### Dữ liệu vào:
```
6 7
1 3
1 4
3 2
4 2
5 6
6 5
3 4
```

#### Dữ liệu ra:
```
3
```

**<center>NGUỒN: BÀI TẬP THẦY HIẾU HƯNG YÊN ÔN TẠI HƯNG YÊN NGÀY 13/11/2019</center>**
<br>

Một vùng đất có $n$ tổ kiến được đánh số $0,1,2,…,n-1$. Các tổ kiến được nối với nhau bởi $n-1$ đường hầm đảm bảo có thể di chuyển giữa $2$ tổ kiến bất kỳ. Nhiệm vụ của bạn là xác định độ dài đường đi giữa $2$ tổ kiến bất kỳ.

## Dữ liệu vào: 
Gồm nhiều bộ test, mỗi bộ test là một nhóm dòng:
- Dòng thứ nhất chứa số nguyên dương $n\ (n≤10^5)$ là số lượng tổ kiến.
- $n-1$ dòng tiếp theo, dòng thứ $i$ chứa $2$ số nguyên dương $A_i, L_i$ cho biết đường đi giữa $i$ và $A_i$ có độ dài $L_i\ (0≤A_i<i;1≤L_i≤10^9)$.
- Dòng tiếp theo chứa số nguyên dương $Q$ là số lượng truy vấn.
- $Q$ dòng cuối cùng, mỗi dòng ghi $2$ số nguyên $x,y$ là yêu cầu xác định độ dài đường đi giữa $x$ và $y$.
- Kết thúc bởi một dòng chứa duy nhất một số $0$.

## Dữ liệu ra:
- Ghi ra kết quả mỗi bộ test trên một dòng gồm $Q$ số nguyên là kết quả từng truy vấn tương ứng theo thứ tự.

## Ví dụ:
### Dữ liệu vào:
```
6
0 8
1 7
1 9
0 3
4 2
4
2 3
5 2
1 4
0 3
2
0 1
2
0 1
1 0
0
```

### Dữ liệu ra:
```
16 20 11 17
1 1
```

## Chú ý cách chấm bài:
- Kết quả của bạn sẽ được chấm theo tỉ lệ phần trăm số test đúng trên tổng số test.
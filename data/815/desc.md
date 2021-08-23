**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XIV (PHÚ THỌ 2018)</center>**
<br>

Trường **CHV** có một hệ thống mạng máy tính, bao gồm $N$ máy tính và $M$ cáp kết nối một số cặp máy tính. Các máy tính được đánh chỉ số từ $1$ đến $N$, các dây cáp nối được đánh chỉ số từ $1$ đến $M$. Thầy Cường, ngoài công việc giảng dạy cho học sinh đội tuyển Tin học còn được ban giám hiệu giao cho trọng trách quản trị hệ thống mạng. 
Trong bài giảng chuyên đề về thành phần liên thông trên đồ thị cho học sinh đội tuyển môn Tin học, thầy Cường đưa ra bài toán nhằm kiểm tra về độ tin cậy của mạng bằng một loạt các thí nghiệm trên mạng máy tính, mỗi thí nghiệm thực hiện $3$ thao tác theo thứ tự sau: 
- Tạm thời ngắt kết nối các dây cáp có chỉ số từ $l$ đến $r$.
- Đếm số lượng các thành phần máy tính liên thông trong mạng được xác định tại thời điểm đó. 
- Kết nối lại các dây cáp bị ngắt kết nối có chỉ số từ $l$ đến $r$.

**Quy ước**: Một máy tính không kết nối với máy tính nào cũng được coi là một thành phần liên thông.

**Yêu cầu**: Với mỗi cặp chỉ số dây cáp $l,r$ thầy Cường đưa ra, các em hãy cùng các bạn học sinh đội tuyển Tin học trường $\text{CHV}$ thực hiện thí nghiệm trên.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $N$ và $M$ $(2≤N ≤2.10^3; 1≤M≤3.10^4)$;
- $M$ dòng tiếp theo mỗi dòng chứa hai số nguyên $u,v$ thể hiện máy tính $u$ kết nối với máy tính $v$ trong mạng;
- Dòng tiếp theo chứa số nguyên $k\ (1≤k≤5.10^4)$ là số lượng thí nghiệm;
- $k$ dòng tiếp theo, mỗi dòng chứa hai số nguyên $l,r\ (1≤l≤r≤M)$ thể hiện một thí nghiệm trên mạng máy tính.

## Dữ liệu ra:
- Ghi ra $k$ dòng, mỗi dòng chỉ ra một số nguyên là số thành phần máy tính liên thông tương ứng với mỗi thí nghiệm.

## Ví dụ:
### Dữ liệu vào:
```
6 5
1 2
5 4
2 3
3 1
3 6
6
1 3
2 5
1 5
5 5
2 4
3 3
```

### Dữ liệu ra:
```
4
5
6
3
4
2
```

## Giới hạn:
- Có $30\%$ số test ứng với $30\%$ số điểm có $n\le 500, m\le 5000, k\le 1000$;
- Có $40\%$ số test khác ứng với $40\%$ số điểm có $n\le 500, m\le 30000, k\le 10000$;
- Có $30\%$ số test còn lại ứng với $30\%$ số điểm có $n\le 2000, m\le 30000, k\le 50000$.
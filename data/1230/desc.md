**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 1</center>**

Lưới tam giác là một tam giác đều được chia thành các tam giác nhỏ bằng cách vẽ các đường thẳng song song với các cạnh và cách đều nhau. Các tam giác con trong lưới được đánh số từ trên xuống dưới, từ trái qua phải bắt đầu từ $1$ (xem hình vẽ).
<center><img src="/images/problems/1230/TRENET.png" width=500px" /></center>

Từ một tam giác con bất kỳ chỉ được quyền di chuyển sang tam giác con có chung cạnh với nó. Ta gọi việc di chuyển từ một tam giác con sang tam giác con chung cạnh với nó là một bước di chuyển.

**Yêu cầu:** Tìm cách di chuyển bắt đầu từ tam giác con với chỉ số $N$ sang tam giác con với chỉ số $M$ sao cho số bước di chuyển cần thực hiện là ít nhất.

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa hai số nguyên dương $N, M$ ghi cách nhau bởi dấu cách $(1 ≤ N, M ≤ 100000)$.

## Dữ liệu ra:
- Dòng đầu tiên ghi số nguyên $K$ là số lượng bước di chuyển ít nhất cần thực 
hiện;
- $K$ dòng tiếp theo mỗi dòng chứa một chỉ số của tam giác con theo thứ tự trên đường di chuyển tìm được bắt đầu từ chỉ số của tam giác xuất phát và kết thúc bởi chỉ số của tam giác cần đến.

## Ví dụ: 
### Dữ liệu vào:
```
14 3
```

### Dữ liệu ra:
```
5
14
13
7
6
2
3
```
Người ta khởi tạo một đồ thị có hướng gồm $10^9$ đỉnh, các đỉnh được đánh số từ $1$ đến $10^9$. Ban đầu đồ thị không có cung nào. Người ta lần lượt thêm các cung vào đồ thị bởi $m$ lệnh dạng $Add(u,v)$: thêm một cung nối từ đỉnh $u$ đến đỉnh $v$ trên đồ thị.

Cho trước hai đỉnh $s$ và $t$. Hãy cho biết số thứ tự của lệnh Add đầu tiên mà sau thời điểm thực hiện lệnh Add đó, ta có thể đi từ $s$ đến $t$ theo các cung của đồ thị

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương $m, s, t\ (m \le {10^5};s \ne t)$;
- $m$ dòng tiếp theo, mỗi dòng ghi hai số nguyên $u, v$ tương ứng là một lệnh $Add(u,v)$.

## Dữ liệu ra:
- Một số duy nhất là số thứ tự lệnh Add tìm được, trong trường hợp không thể đi từ $s$ đến $t$ cho dù thực hiện tất cả các lệnh Add thì ghi số $0$.

## Ví dụ:
#### Dữ liệu vào:
```
5 1 5
1 2
3 5
3 1
2 3
2 4
```

#### Dữ liệu ra:
```
4
```
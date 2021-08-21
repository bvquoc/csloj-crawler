**<center>NGUỒN: IOI Camp 2005</center>**

King Monarch vừa khai hoang một vùng đất để lập ra đất nước Monarch, lúc đầu chỉ có $N$ thành phố (được đánh số từ $1$ đến $N$) và không có con đường nào. King Monarch chọn ra $4$ thành phố đặc biệt để làm trung tâm kinh tế và $4$ thành phố này phải được liên thông với nhau. Chi phí xây dựng các con đường không phải nhỏ vì thế nhà vua muốn sử dụng chi phí ít nhất để xây dựng các con đường sao cho $4$ thành phố đặc biệt đó vẫn liên thông. Bạn được biết chi phí ước tính để xây dựng một số con đường và bạn hãy chọn một số con đường để xây dựng theo đúng ý nhà vua biết rằng luôn tồn tại ít nhất một phương án xây dựng đường sao cho $4$ thành phố đặc biệt liên thông.

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương $N$ là số lượng các thành phố;
- Dòng thứ hai ghi $4$ số nguyên là số hiệu của $4$ thành phố đặc biệt;
- Trong một số dòng tiếp theo, mỗi dòng ghi $3$ số nguyên $u, v$ và $c$ với ý nghĩa muốn xây dựng một con đường hai chiều nối trực tiếp giữa hai thành phố $u$ và $v$ thì chi phí là $c$.

## Dữ liệu ra:
- Dòng đầu tiên tổng chi phí nhỏ nhất để xây dựng hệ thống đường;
- Trong một số dòng tiếp theo, mỗi dòng ghi hai số nguyên $u$ và $v$ với ý nghĩa cần xây dựng con đường hai chiều nối giữa hai thành phố $u$ và $v$.

## Ví dụ:
#### Dữ liệu vào:
```
5
2 3 4 1
1 2 10
1 5 1
5 2 1
1 4 1
4 3 3
3 2 2
```

#### Dữ liệu ra:
```
5
1 5
5 2
3 2
4 1
```

## Giới hạn:
- $1 ≤ N ≤ 100; 1 ≤ c ≤ 5000$.
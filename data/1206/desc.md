**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Một mạng nội bộ gồm $n$ máy. Máy thứ $i$ được đặt mật khẩu là $p_i$ - một số nguyên không âm $k$ bít $(0≤p_i<2^k;1≤k≤60)$. Các máy được nối với nhau bởi $m$ kênh $(u_i,v_i)$ cho phép thiết lập đường truyền $2$ chiều giữa $u_i$ và $v_i\ (1≤i≤m)$ thông qua router trung tâm. Mạng được coi là an toàn nếu mật khẩu của $2$ máy giữa hai đầu một kênh bất kỳ là khác nhau. Ban đầu, mạng là an toàn tuyệt đối. Trung tâm an ninh mạng vừa thông báo có một loại virus gây hại có thế làm thay đổi mật khẩu của các máy nội bộ. Virus mang một mã $x$ bí mật thay đổi mật khẩu máy $i$ từ $p_i$ thành $p_i \text{ xor } x$. Một bộ tình huống tấn công $\{A,x\}$ là khi virus mang mã $x$ tấn công vào tất cả các máy trong tập $A$ ($A$ là tập con có thể rỗng của $\{1,2,3,…,n\}$) mà không tấn công vào bất kỳ máy nào khác trong phần còn lại ngoài tập $A$.

**Yêu cầu:** Hãy xác định số bộ tình huống mà hệ thống mạng được an toàn.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên dương $n,m,k\ (n,m≤5.10^5,k≤60)$;
- Dòng thứ hai chứa $n$ số nguyên $p_1,p_2,…,p_n\ (0≤p_i<2^k)$;
- $m$ dòng cuối cùng, dòng thứ $i$ chứa hai số nguyên $u_i,v_i$ xác định cạnh thứ $i$ của đồ thị $(1≤i≤m;1≤u_i,v_i≤n)$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số cách chọn tìm được. Đưa ra theo module $10^9+7$.

## Ví dụ:
### Dữ liệu vào:
```
4 4 2
0 1 0 1
1 2
2 3
3 4
4 1
```

### Dữ liệu ra:
```
50
```

## Giới hạn:
- $30\%$ số test có $k,n≤10$;
- $20\%$ số test khác có $k≤14;n,m≤5×10^3$;
- $20\%$ số test khác có $n,m≤5×10^3;k≤60$;
- $30%$ số test còn lại có $m,m≤5×10^5;k≤60$.
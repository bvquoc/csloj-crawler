Cho một dãy số $a_1,a_2,…a_n$, ban đầu $a_i=0\ ∀i=1..n$ và $m$ truy vấn dạng $Q(u,v,k)$ tương ứng tăng các giá trị $a_u,a_{u+1},…,a_v$ lên một lượng bằng $k$.

**Ví dụ:** Cho dãy $a=[0,0,0]$ sau truy vấn: $Q(2,3,30)$ thì dãy a trở trành $a=[0,30,30]$.

**Yêu cầu:** Sau $m$ truy vẫn, hãy tìm giá trị lớn nhất của dãy $a$.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên dương $n,m\ (3≤n≤10^7;1≤m≤2×10^5)$;
- $m$ dòng tiếp theo, dòng thứ $i$ ghi truy vấn $i$ gồm ba số nguyên không âm $u,v,k\ (1≤u≤v≤n;0≤k≤10^9)$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là giá trị lớn nhất của dãy $a$ sau $m$ truy vấn.

## Ví dụ:
#### Dữ liệu vào:	
```
5 3
1 2 100
2 5 100
3 4 100
```

#### Dữ liệu ra:
```
200
```

#### Giải thích:
- Dãy ban đầu: $a=[0,0,0,0,0]$;
- Truy vấn $1$: $a=[100,100,0,0,0]$;
- Truy vấn $2$: $a=[100,200,100,100,100]$;
- Truy vấn $3$: $a=[100,200,200,200,100]$.

Giá trị lớn nhất là $200$.
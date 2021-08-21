**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Lê Minh Hoàng, Ngày 2</center>**

Cho ~𝑆~ là một xâu ký tự, ta gọi xâu lặp bậc ~𝑘~ của ~𝑆~, ký hiệu ~𝑆^𝑘~ là xâu tạo thành bằng cách nối liên tiếp xâu ~𝑆~ đúng ~𝑘~ lần. Ví dụ **“sossossos”** là xâu lặp bậc ~3~ của xâu **“sos”**.

Định nghĩa xâu ~𝐴~ là xâu con của xâu ~𝐵~ nếu ta có thể xóa một vài ký tự của ~𝐵~ để được xâu ~𝐴~. Ví dụ xâu **“gotwin”** là xâu con của xâu **“gonewiththewind”**.

**Yêu cầu:** Cho hai xâu ~𝑆~ và ~𝑇~. Hãy tìm xâu lặp bậc lớn nhất của ~𝑆~ là xâu con của xâu ~𝑇~, cho biết bậc đó.

## Dữ liệu vào:
- Dòng đầu chứa xâu ~𝑆~ chỉ gồm các chữ cái thường độ dài không quá ~10^6~;
- Dòng thứ hai chứa xâu ~𝑇~ chỉ gồm các chữ cái thường độ dài không quá ~10^6~.

## Dữ liệu ra:
- Ghi ra số ~𝑘~ lớn nhất mà ~𝑆^𝑘~ là xâu con của xâu ~𝑇~.

## Ví dụ 
#### Dữ liệu vào:
```
pet
hopeforthebestbutpreparefortheworst
```

#### Dữ liệu ra:
```
2
```
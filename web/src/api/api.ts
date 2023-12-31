import { create } from "apisauce";
import {
  Desenvolvedor,
  DesenvolvedorDataToSubmit,
} from "../pages/desenvolvedores/utils/types";
import { Nivel, NivelDataToSubmit } from "../pages/niveis/utils/types";

interface RequestError {
  message: string;
}

const apiSauce = create({ baseURL: "http://localhost:3030" });

const apiNiveis = {
  findAll: async () => apiSauce.get<Nivel[], RequestError>("/niveis"),
  create: async (data: NivelDataToSubmit) =>
    apiSauce.post<Nivel, RequestError>("/niveis", data),
  findOne: async (id: number) =>
    apiSauce.get<Nivel, RequestError>(`/niveis/${id}`),
  update: async (id: number, data: NivelDataToSubmit) =>
    apiSauce.patch<Nivel, RequestError>(`/niveis/${id}`, data),
  delete: async (id: number) =>
    apiSauce.delete<Nivel, RequestError>(`/niveis/${id}`),
};

const apiDesenvolvedores = {
  findAll: async () =>
    apiSauce.get<Desenvolvedor[], RequestError>("/desenvolvedores"),
  create: async (data: DesenvolvedorDataToSubmit) =>
    apiSauce.post<Desenvolvedor, RequestError>("/desenvolvedores", data),
  findOne: async (id: number) =>
    apiSauce.get<Desenvolvedor, RequestError>(`/desenvolvedores/${id}`),
  update: async (id: number, data: DesenvolvedorDataToSubmit) =>
    apiSauce.patch<Desenvolvedor, RequestError>(`/desenvolvedores/${id}`, data),
  delete: async (id: number) =>
    apiSauce.delete<Desenvolvedor, RequestError>(`/desenvolvedores/${id}`),
};

export const api = {
  niveis: apiNiveis,
  desenvolvedores: apiDesenvolvedores,
};
